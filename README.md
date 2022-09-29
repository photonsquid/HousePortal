![banner](docs/res/HousePortal_banner_readme.png)

# HousePortal

**A clean and minimal interface to monitor and control your smart devices, such as light bulbs, light switches, TVs, bluetooth speakers, and many others.**

*Built with React JS*.

## Installation

### Using docker

- ⬇️ Pull the latest version of the [image](https://github.com/photonsquid/HousePortal/pkgs/container/houseportal "HousePortal image on ghcr.io")

- ▶️ Run the container 
  ```
  docker run -d -p [port]:8080 ghcr.io/photonsquid/houseportal:[tag]
  ``` 
  where `[port]` is the 
  port you want to use for the web interface, and `[tag]` is the tag of the previously pulled image.

### From source

- ⬇️ Download the latest release from [github](https://github.com/photonsquid/HousePortal/releases/latest "Latest release of HousePortal") or clone the repository

- ⚒️ Install thhttps://docs.google.com/presentation/d/1vF6okqVF-qJgH8nX9oM9oRNd83ruyr0J7m_S1gjH34k/edit#slide=id.gf4ffa60cf2_0_304e dependencies (using yarn is recommended)
  ```bash
  cd HousePortal
  yarn install
  ```

- ▶️ Start the server
  ```bash
  yarn start
  ```

## Technical support

Having trouble accessing our platform? Check our [🟢 service status page](https://stats.uptimerobot.com/1D5lVT63kJ) or contact us at [📫 contact@photonsquid.fr](mailto:contact@photonsquid.fr)
