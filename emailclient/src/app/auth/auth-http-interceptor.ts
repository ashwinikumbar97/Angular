import {Injectable} from '@angular/core';
import {HttpEvent , HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const modifiedReq = req.clone({   // to make req writable and change its body
        withCredentials:true,  // to stay logged in with cookies 
        
       });
       return next.handle(modifiedReq);
    }

}
