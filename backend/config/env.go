package config

import (
	"github.com/joho/godotenv"
	"fmt"
)

func InitEnv() {
	err := godotenv.Load()
	if err != nil {
		panic(".env file not found")
	}

	fmt.Println("Env Success")
}