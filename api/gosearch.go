package api

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, `{"name": "Morty", "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}`)
}
