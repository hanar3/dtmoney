![dtmoney-app](https://user-images.githubusercontent.com/76849258/114105450-230bd000-98a3-11eb-90e5-f2621adc204c.png)

# dtmoney
![Badge](https://img.shields.io/badge/dtmoney-Keep%20%20track%20of%20your%20expenses-%237159c1?style=for-the-badge&logo=ghost)

Content Table
=================
<!--ts-->
   * [About](#about)
   * [Requirements](#requirements)
   * [Techstack](#-tech-stack)
<!--te-->

<h4 align="center"> 
  dtmoney 
</h4>

### About
DTMoney is a fully functioning expense tracking WebApp

### Features
- [x] GraphQL API -  See [dtmoney-server](https://github.com/hanar3/dtmoney-graphql-server)
- [x] Dark and Light themes
- [x] User identification via deviceId
- [x] Transaction CRUD
  - [x] Transaction Creation
  - [x] Transaction Update
  - [x] Transaction Deletion

### Requirements

To run this project locally, it is recommended that you'll have these tools installed on your machine:
[Git](https://git-scm.com),
[Node.js](https://nodejs.org/en/),
[Yarn version 1.x](https://classic.yarnpkg.com/lang/en/),
[Docker](https://www.docker.com/),
[VSCode](https://code.visualstudio.com/).

### 🎲 Setting up the front end

```bash
# Clone this repo
$ git clone https://github.com/hanar3/dt-money

# CD into the project folder terminal/cmd
$ cd dt-money

# Install the dependencies
$ yarn install

# Run the application in development mode
$ yarn start

# The development server will start running on port 3000 - go to <http://localhost:3000/>
```


### 🛠 Tech Stack

The following tools were used to build this project:

- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Client](apollographql.com/)
- [Chakra UI](https://chakra-ui.com/)
