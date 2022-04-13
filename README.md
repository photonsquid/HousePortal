# HousePortal

<img src="public/houseportal.svg" alt="Logo" width="100" align="left" />

A clean and minimal interface to monitor and control your smart devices, such as light bulbs, light switches, TVs, bluetooth speakers, and many others.

> Built using React JS.

## Installation

### Using docker

- ⬇️ Pull the latest version of the [image](https://github.com/photonsquid/HousePortal/pkgs/container/houseportal "HousePortal image on ghcr.io")

- ▶️ Run the container 
  ```
  docker run -p 8080:[port] ghcr.io/photonsquid/houseportal:[tag]
  ``` 
  where `[port]` is the 
  port you want to use for the web interface, and `[tag]` is the tag of the previously pulled image.

### From source

- ⬇️ Download the latest release from [github](https://github.com/photonsquid/HousePortal/releases/latest "Latest release of HousePortal") or clone the repository

- ⚒️ Install the dependencies (using yarn is recommended)
  ```bash
  cd HousePortal
  yarn install
  ```

- ▶️ Start the server
  ```bash
  yarn start
  ```
