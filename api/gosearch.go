package api

import (
	"fmt"
	"net/http"

	rnm "github.com/pitakill/rickandmortyapigowrapper"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	name, ok := r.URL.Query()["name"]
	if !ok || len(name[0]) < 1 {
		w.Write([]byte("Missing name param"))
		w.WriteHeader(http.StatusBadRequest)
	}
	characters, err := rnm.GetCharacters(map[string]interface{}{
		"name": name[0],
	})
	if err != nil {
		w.Write([]byte("Error fetching characters"))
		w.WriteHeader(http.StatusInternalServerError)
	}
	fmt.Printf("Results: %v", characters)
	w.Write([]byte(fmt.Sprintf("%v", characters.Results)))
}
