# KongGo

This server to diffuse en json data of the survey.

## URL 

- **KongGo GET** : `/`
- **Survey GET** : `/survey`

## Start server BIN
```shell
./main
```

## Install Go

Download Go Lang
https://golang.org/dl/

## Bash

Edit your ~/.bash_profile to add the following line:
```shell
export GOPATH=$HOME/go
```
Save and exit your editor. Then, source your ~/.bash_profile.
```shell
source ~/.bash_profile
```


## Start project

```shell
go run main.go
```

## Build project

```shell
go build main.go
```

## Docket

```shell
docker build -t konggo .
docker run -p 3001:3001 -d konggo
docker ps
docker images
docker stop <id_docker>
```