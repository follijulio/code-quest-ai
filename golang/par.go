package main

import "fmt"

func EhPar(num int) bool {
	return num%2 == 0
}

func main_2() {
	fmt.Println(EhPar(2))
	fmt.Println(EhPar(3))
	fmt.Println(EhPar(0))
	fmt.Println(EhPar(-4))
	fmt.Println(EhPar(-7))
	fmt.Println(EhPar(100))
}
