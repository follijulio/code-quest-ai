package main

import "fmt"

func soma(a int, b int) int {
	return a + b
}

func subtracao(a int, b int) int {
	return a - b
}

func multiplicacao(a int, b int) int {
	return a * b
}

func divisao(a int, b int) float64 {
	return float64(a) / float64(b)
}

func main_1() {
	var soma int = soma(2, 3)
	var sub int = subtracao(2, 3)
	var mult int = multiplicacao(2, 3)
	var div float64 = divisao(2, 3)

	fmt.Printf("%d", soma)
	fmt.Printf("\n")
	fmt.Printf("%d", sub)
	fmt.Printf("\n")
	fmt.Printf("%d", mult)
	fmt.Printf("\n")
	fmt.Printf("%f", div)
}
 