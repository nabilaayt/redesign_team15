package models

import (
	"time"

	"gorm.io/gorm"
)

type BeritaMahasiswa struct {
	gorm.Model
	Cover    string    `json:"cover" gorm:"not null"`
	Tema     string    `json:"tema" gorm:"not null"`
	Judul    string    `json:"judul" gorm:"not null"`
	PostedAt time.Time `json:"posted_at"`
}
