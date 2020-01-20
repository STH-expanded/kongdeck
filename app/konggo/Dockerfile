#
# KongGo
#

FROM golang:1.13.6 as builder
WORKDIR /go/src/app
ADD src src

COPY ./src/ .

CMD ["./main"]