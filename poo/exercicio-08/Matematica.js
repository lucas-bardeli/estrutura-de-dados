
class Matematica {
  static somar(a, b) {
    return a + b
  }

  static subtrair(a, b) {
    return a - b
  }

  static fatorial(n) {
    let fatorial = 1
    
    for (let i = 1; i <= n; i++) {
      fatorial = fatorial * i
    }

    return `O fatorial de ${n} é: ${fatorial}`
  }
}

module.exports = Matematica