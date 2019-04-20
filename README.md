# Web-Wechat
A Web Version of WeChat Powered by Hybird APP.

## Main Directory
> In the readme file, we use the following prefix to differentially identify files and folders.We hope that it will be easier for our users to read the readme file in this way.

> - R - FLOLDE(R)
> - E - FIL(E)

- R |- &nbsp; /webpack &nbsp; -| -> Project Entrance
    - E |- &nbsp; /webpack/package.json &nbsp; -| -> The package.json for Webpack / Vue-template
    - R |- &nbsp; /webpack/template &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-| -> Vue-template
    - R |- &nbsp; /webpack/wechat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-| -> Front-end project entry
        - | &nbsp; /webpack/wechat/... &nbsp; -| -> The file structure under this file directory is consistent with the file structure of the Webpack project.

## How to Run
> We can read the ```/webpack/wechat/package.json``` file for more details.
### Development Preview
```
npm run dev 
```
> We can also use the following command, they are actually consistent.
```
npm run start
```
### Project Build
> The file will eventually be built into the ```/webpack/wechat/dist``` directory. However, the build directory is also configurable.
```
npm run build
```