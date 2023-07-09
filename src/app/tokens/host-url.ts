import {Injectable, InjectionToken} from '@angular/core';

@Injectable()
export class HostUrl { }

export const HOST_URL = new InjectionToken<string>('HostUrl');