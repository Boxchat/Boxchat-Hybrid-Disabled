# Boxchat-Hybrid-Disabled
A Secure Private Chat Platform.

# CAUTION
This project is a branch of Boxchat and we may not update the Boxchat of this architecture in the future. The Boxchat of the architecture may cause the user UI interaction to be stuck. It is verified that the problem is related to the UI component library used, and the UI component is in a small amount of bugs. Therefore, the branch stops maintenance, but does not refer to the entire Boxchat project. We will open a new branch as a development of the Hybrid version and disable this branch. This version will be more technically engineered to solve our previous problems and problems that may be encountered in the future.

## Main Directory
> In the readme file, we use the following prefix to differentially identify files and folders.We hope that it will be easier for our users to read the readme file in this way.

![img - File Structure Diagram](https://i.loli.net/2019/05/08/5cd2c40530c6f.png)

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
