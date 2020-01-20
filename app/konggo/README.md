# KongGo

This server to diffuse en json data of the survey.

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

## Start server BIN
```
./main
```

## Start project

```
go run main.go
```

## Build project

```
go build main.go
```

## Docket

sudo docker build -t konggo .
sudo docker run -p 3001:3001 -d konggo
sudo docker ps
sudo docker images
sudo docker stop 9c50db162204