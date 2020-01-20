package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

const port = ":3001"

var byteSurvey = []byte("")

func konggo(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "KongGo\n")
}

func headers(w http.ResponseWriter, req *http.Request) {
	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func survey(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteSurvey)
}

func main() {
	// Read value in json file
	jsonFile, err := os.Open("survey.json")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Successfully Opened survey.json")
	defer jsonFile.Close()
	s, _ := ioutil.ReadAll(jsonFile)
	byteSurvey = s

	// Init server
	http.HandleFunc("/", konggo)
	http.HandleFunc("/survey", survey)
	http.HandleFunc("/headers", headers)
	fmt.Printf("*** Kong-Go ***\n\nserver: http://localhost%s\n\n***************\n", port)

	// Start server
	log.Fatal(http.ListenAndServe(port, nil))
}
