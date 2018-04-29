/**
 * http://usejsdoc.org/
 */
import httpProxy from 'http-proxy';
import express from 'express';

export default class ProductProxy{

    
    constructor(host){

        console.log("product proxy is initialized");
        this.host=host;
        this.pxy = httpProxy.createProxyServer({changeOrigin: true});
        console.log("proxy object "+this.pxy);
        this.pxy.on('error', (error, request, response) => {
            console.log(error);
            response.status(500).send(error);
        });
       
    }

    get router(){
      return express.Router()
        .all('*', this.proxy.bind(this));
    }

      

    proxy (request, response){

        console.log("proxy is called");
        
        console.log("proxy object"+this.pxy);
        console.log("request url "+request.url);
        this.pxy.web(request,response,{

            target: this.host+ request.url,
            ignorePath: true
        });

            
    }





}