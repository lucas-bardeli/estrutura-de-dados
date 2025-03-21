#include <iostream>
#include <locale>
#include "pilha-dinamica.h"

using namespace std;

char menuInicial() {
    char menu;
    cout << "\n --------- Menu --------\n"
            "1 - para inserir aluno na pilha\n"
            "2 - para remover um aluno da pilha\n"
            "3 - exibir o topo da pilha\n"
            "--> ";
    fflush(stdin);
    cin >> menu;
    return menu;
}

char menuSaida() {
    char menu;
    cout << "\nDeseja sair do programa? S para sim "
            "e qualquer tecla para continuar...\n--> ";
    cin >> menu;
    menu = toupper(menu);
    return menu;
}

int main() {
    setlocale(LC_ALL, "Portuguese");

    Aluno alunoN;
    char menu;
    Pilha* topo = criarPilha();

    do {
        menu = menuInicial();
        switch(menu) {
            case '1':
                cadastrarAluno(&alunoN);
                inserirPilha(topo, &alunoN);
            break;
            case '2':
                removerPilha(topo);
            break;
            case '3':
                exibirTopo(topo);
            break;
            default:
                cout<< "\nOp��o inv�lida!" << endl;
            break;
        }
        menu = menuSaida();
        system("clear||cls");

    } while(menu != 'S');

    liberarPilha(topo);

    return 0;
}
