import * as Moment from 'moment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface TelegramMessage
{
    id:         number;
    fromUser:   boolean;
    message:    string;
    timestamp:  Moment.Moment;
}


@Injectable({
    providedIn: 'root'
})
export class TelegramService {
    private readonly BASE_HREF = 'http://localhost:8080';
    private _ws: WebSocket | null;
    private _initialized: boolean;
    private _sessionKey: string | null;
    private _connected: BehaviorSubject<boolean>;
    private _messages: BehaviorSubject<Array<TelegramMessage>>;


    constructor ( private readonly _httpClient: HttpClient ) {
        this._ws = null;
        this._initialized = false;
        this._sessionKey = null;
        this._connected = new BehaviorSubject<boolean>(false);
        this._messages = new BehaviorSubject<Array<TelegramMessage>>([]);
    }


    public async init ( ): Promise<void>
    {
        if ( ! this._initialized )
        {
            const resp = await this._httpClient.get(this.BASE_HREF + '/v1/info', {withCredentials: true}).toPromise();
            console.log('resp', resp);

            this._sessionKey = (resp as any).session;
            this._initialized = true;
        }

        if ( !this._ws )
        {
            this._connect();
        }
    }


    private _connect ( ): void
    {
        if ( this._ws )
        {
            this._ws.close();
            this._ws = null;
        }

        this._ws = new WebSocket(this.BASE_HREF.replace(/^http/i, 'ws') + `/v1/message/ws?session=${encodeURIComponent(this._sessionKey)}`);

        this._ws.onclose = ( evt ) =>
        {
            console.log(`Websocket closed: `, evt);
            this._ws = null;
            this._connected.next(false);
        };

        this._ws.onmessage = ( evt ) =>
        {
            console.log('TODO: Message: ', evt);

            const msg = JSON.parse(evt.data);
            switch ( msg.action )
            {
                case 'ping':
                    break;
                case 'message':
                    const messages = [...this._messages.getValue()];
                    messages.push({
                        id:         msg.payload.id,
                        fromUser:   msg.payload.fromUser,
                        message:    msg.payload.message,
                        timestamp:  Moment(msg.payload.timestamp)
                    });
                    this._messages.next(messages);
                    break;
                default:
                    console.error(`Unsupported websocket action: ${msg.action}`);
                    break;
            }
        };

        this._ws.onerror = ( evt ) =>
        {
            console.log('Websocket error: ', evt);
            this._connected.next(false);
            this._ws = null;
        };

        this._ws.onopen = ( ) =>
        {
            console.log(`Websocket connected`);
            this._connected.next(true);
        }
    }


    public async sendMessage ( msg: string ): Promise<void>
    {
        this._ws.send(JSON.stringify({
            action: 'message',
            payload: {
                message: msg
            }
        }));
    }


    public isConnected ( ): BehaviorSubject<boolean>
    {
        return this._connected;
    }


    public getMessages ( ): BehaviorSubject<Array<TelegramMessage>>
    {
        return this._messages;
    }
}
