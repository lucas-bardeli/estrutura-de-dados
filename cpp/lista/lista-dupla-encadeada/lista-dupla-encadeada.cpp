#include <iostream>
#include "lista-dupla-encadeada.h"
#include "menu.h"

using namespace std;

void cadastrarAluno(Aluno *alunoN) {
    cout << "\nInforme o nome do aluno: ";
    fflush(stdin);
    cin.getline(alunoN->nome, sizeof(alunoN->nome));

    // cout << "Matrícula do aluno! ";
    alunoN->matricula = verificaNumInt();
    // cin >> alunoN->matricula;
    fflush(stdin);

    // cout << "Nota do aluno! ";
    alunoN->nota = verificaNumReal();
    //cin >> alunoN->nota;
    fflush(stdin);
}

Lista* criarLista() {
    //ponteiro que irá apontar para uma estrutura Lista (que já é um ponteiro para struct NODE)
    Lista *inicioLista;
    inicioLista = new Lista; // alocação dinâmica da variável inicioLista
    //se a lista (inicioLista) foi alocada corretamente, ela apontará para NULO
    if (inicioLista != nullptr) {
        *inicioLista = nullptr;
        cout << "\nLista Criada com sucesso!" << endl;
    }
    return inicioLista;
}

void liberarLista(Lista *inicioLista) {
    if (inicioLista != nullptr) { // se a lista existir
        No *no; // cria um ponteiro do tipo No
        while((*inicioLista) != nullptr) { // verifica se a lista não está vazia (se existem nós)
            no = *inicioLista; // aponta o ponteiro no para o início da lista
            *inicioLista = no->prox; // o inicio da lista avança para o próximo nó
            delete no; // apaga o nó da memória...
        } // esse processo é feito até que o inícioLista seja nulo.
        delete inicioLista; // apaga o inicioLista da memória
    }
}

//função para inserir um nó no fim da lista
int inserirFinal(Lista* inicioLista, Aluno *alunoN) {
    if (inicioLista == nullptr) {
        cout << "\nLista não foi criada!" << endl;
        return 0;
    }
    No *novoNo; // cria variável no como um ponteiro para estrutura No
    novoNo = new No; // aloca dinamicamente um espaço na memória

    if (novoNo == nullptr) { // verificar se o nó não foi alocado corretamente
        cout << "\nErro na alocação na memória, nó não foi alocado!" << endl;
        return 0;
    }
    //valores inseridos no cadastro e são atribuidos ao novoNo
    novoNo->aluno = *alunoN;
    novoNo->prox = nullptr;
    novoNo->ant = nullptr; //ponteiro que aponta para o nó anterior

    //se a lista estiver vazia, apontar o inicioLista para novoNo;
    if (*inicioLista == nullptr) {
        *inicioLista = novoNo;
        cout << "\nNovo nó inserido na lista com sucesso, primeiro elemento!" << endl;
        return 1;
    }
    // se a lista não estiver vazia... deverá percorrer até o último elemento
    No *noAtual;  // variável noAtual é um ponteiro para estrutura No
    noAtual = *inicioLista; // noAtual vai apontar  inícioLista aponta
    // verifica se o próximo nó não é nulo
    while(noAtual->prox != nullptr) {
       noAtual = noAtual->prox; //atualiza noAtual para o proximo elemento
    }// ao sair do while... significa que noAtual->prox é nulo

    noAtual->prox = novoNo;  // noAtual->prox apontará para o novoNo;
    novoNo->ant = noAtual; // #### novoNo->ant aponta para noAtual
    cout << "\nNovo nó inserido no final lista com sucesso!" << endl;
    return 1;
}

//função para inserção de um nó no início da lista
int inserirInicio(Lista* inicioLista, Aluno *alunoN) {
    if(inicioLista == nullptr){
        cout << "\nMemória Insuficiente: Lista não foi alocada!" << endl;
        return 0;
    }
    No* novoNo;
    novoNo = new No;

    if (novoNo == nullptr) { // se a alocação não foi feita corretamente
        cout << "\nMemória Insuficiente: Nó (novoNo) não foi alocado!" << endl;
        return 0;
    }
    // atribuindo os valores do cadastro ao nó criado (novoNo)
    novoNo->aluno = *alunoN;
    novoNo->prox = nullptr; //atribuindo nulo ao prox do novoNo
    novoNo->ant = nullptr; // ###atribuindo nulo ao ant do novoNo

    //se a lista estiver vazia, apontar o inicioLista para novoNo;
    if (*inicioLista==nullptr) {
        *inicioLista = novoNo;
        cout << "\nNovo nó inserido na lista com sucesso - primeiro elemento!" << endl;
        return 1;
    }

    novoNo->prox = (*inicioLista); //aponta o prox do novoNo para o inícioLista
    (*inicioLista)->ant = novoNo; //###Apontando o ant do inicioLista para o novoNo
    *inicioLista = novoNo; // apontando a cabeça da lista para o nó criado (novoNo)
    cout << "\nNovo nó inserido no início da lista com sucesso!" << endl;
    return 1;
}

//função para inserir um nó em uma lista ordenada
int inserirItem(Lista* inicioLista, Aluno *alunoN) {
    if (inicioLista == nullptr) {
        cout << "\nMemória Insuficiente: Lista não foi alocada!" << endl;
        return 0;
    }
    No* novoNo;
    novoNo = new No;

    if (novoNo == nullptr) { // se a alocação não foi feita corretamente
        cout << "\nMemória Insuficiente: Nó (novoNo) não foi alocado!" << endl;
        return 0;
    }
    novoNo->aluno = *alunoN;// atribuindo os valores do cadastro ao nó criado (novoNo)
    novoNo->prox = nullptr; // atribui nulo ao prox
    novoNo->ant = nullptr; //### atribui nulo ao anterior

    if ((*inicioLista) == nullptr) { //lista vazia, aponta o inicioLista para o novoNO
        *inicioLista = novoNo;
        cout << "\nNovo nó inserido na lista com sucesso, primeiro elemento!" << endl;
        return 1;
    }

    No *noAtual;//ponteiro para percorrer a lista:noAtual->prox;noAtual->ant
    noAtual = *inicioLista; // noAtual aponta o inicio da Lista

    // se noAtual->mat >= a alunoN->mat não entra
    // faz a repetição enquanto o noAtual for diferente null
    // e a matr da lista < mat (novoNo)
    while((noAtual->prox != nullptr) && (noAtual->aluno.matricula < alunoN->matricula)) {
        noAtual = noAtual->prox;
    }
    //novoNo será inserido como primeiro elemento da lista
    if ((noAtual == *inicioLista) && (noAtual->aluno.matricula > alunoN->matricula)) {
        novoNo->prox = noAtual;
        noAtual->ant = novoNo;  // ###aponto o ant (noAtual) para o novoNo
        *inicioLista = novoNo;
        cout << "\nNovo nó inserido no início da lista com sucesso!" << endl;
        return 1;
    }

    //inserção no fim da lista, O atual->prox é nulo FIM DA LISTA
    if ((noAtual->prox == nullptr) && (noAtual->aluno.matricula < alunoN->matricula)) {
        novoNo->ant = noAtual; // ##### NovoNo->ant aponta noAtual
        noAtual->prox = novoNo;
        cout << "\nNovo nó inserido no fim da lista com sucesso!" << endl;
        return 1;
    }

    //inserção quando não é no inicio da lista e nem no fim...
    //cuidado com a ordem pois senão pode perder o acesso do noAtual->ant
    novoNo->prox = noAtual;
    novoNo->ant = noAtual->ant; // ##### NovoNo aponta ant para o
    (noAtual->ant)->prox = novoNo;
    noAtual->ant = novoNo; //#### ant do noAtual aponta para o novoNo
    cout << "\nNovo nó inserido na lista com sucesso, ordenado!" << endl;
    return 1;
}

void imprimirLista(Lista *inicioLista) {
    No *noAux = *inicioLista;
    if (noAux == nullptr)
        cout << "\nNão há dados cadastrados na lista!" << endl;
    else {
        while(noAux != nullptr) {
            cout << "\nNome: " << noAux->aluno.nome << endl;
            cout << "Matrícula: " << noAux->aluno.matricula << endl;
            cout << "Nota: " << noAux->aluno.nota << endl;
            noAux = noAux->prox;
        }
    }
}

void imprimirListaInversa(Lista *inicioLista) {
    No *noAux = *inicioLista;
    if (noAux == nullptr)
        cout << "\nNão há dados cadastrados na lista!" << endl;
    else {
        while(noAux->prox != nullptr)
            noAux = noAux->prox;
        do {
            cout << "\nNome: " << noAux->aluno.nome << endl;
            cout << "Matrícula: " << noAux->aluno.matricula << endl;
            cout << "Nota: " << noAux->aluno.nota << endl;
            noAux = noAux->ant;
        } while(noAux != nullptr);
    }
}

int removerInicio(Lista* inicioLista) {
    if (inicioLista == nullptr) { //lista não foi criada corretamente
        cout << "\nMemória Insuficiente: Lista não foi alocada!" << endl;
        return 0;
    }
    if ((*inicioLista) == nullptr) { //lista vazia, não há o que remover
        cout << "\nLista vazia! Não há nós para remover!" << endl;
        return 0;
    }
    No *no = *inicioLista;

    if (no->prox == nullptr) { //único elemento, inicioLista deve apontar null
        *inicioLista = nullptr;
        cout << "\nÚnico elemento removido com sucesso! Lista agora está vazia!" << endl;
        delete no;
        return 1;
    }
    *inicioLista = no->prox;
    (*inicioLista)->ant = nullptr;  //(no->prox)->ant = nullptr;
    delete no;
    cout << "\nNó removido do início da lista com sucesso!" << endl;
    return 1;
}

int removerFinal(Lista* inicioLista) {
    if (inicioLista == nullptr) { //lista não foi criada corretamente
        cout << "\nMemória Insuficiente: Lista não foi alocada!" << endl;
        return 0;
    }
    if ((*inicioLista) == nullptr) { //lista vazia, não há o que remover
        cout << "\nLista vazia! Não há nós para remover!" << endl;
        return 0;
    }
    No *no = *inicioLista; // precisa só de um ponteiro!!!

    if (no->prox == nullptr) { //único elemento, inicioLista deve apontar null
        *inicioLista = nullptr;
        cout << "\nÚnico elemento removido com sucesso! Lista agora está vazia!" << endl;
        delete no;
        return 1;
    }

    while(no->prox != nullptr)  // percorre até encontrar o nulo
        no = no->prox;

    if (no == (*inicioLista)) {
        *inicioLista = no->prox; // atribui nulo para o inicioLista
        (no->prox)->ant = nullptr; //### primeiro elemento tem ant nulo
    }
    else //se no foi movimentado no while... no->prox vai chegar até nulo
        (no->ant)->prox = nullptr;

    delete no; // desaloca o no...
    cout << "\nNó removido do fim lista com sucesso!" << endl;
    return 1;
}

int removerItem(Lista* inicioLista, int matA) {
    if (inicioLista == nullptr) { //lista não foi criada corretamente
        cout << "\nMemória Insuficiente: Lista não foi alocada!" << endl;
        return 0;
    }
    if ((*inicioLista) == nullptr) { //lista vazia, não há o que remover
        cout << "\nLista vazia! Não há nós para remover!" << endl;
        return 0;
    }

    No *no = *inicioLista;
    // percorre a lista até encontrar a matricula ou chegar no fim
    while((no != nullptr) && (no->aluno.matricula != matA)) {
        no = no->prox;
    }

    if (no == nullptr) { //valor da matrícula não encontrado na lista
        cout << "\nLista não contém o elemento que procura!" << endl;
        return 0;
    }

    //lista tem apenas o no a ser removido, o *inicioLista será nulo
    if ((no->ant == nullptr) && (no->prox == nullptr)) {
        *inicioLista = nullptr;
        delete no;
        cout << "\nNó encontrado e removido com sucesso, a lista está vazia!" << endl;
        return 1;
    }
    //nó a ser removido é o primeiro e a lista contém mais elementos.
    if (no == *inicioLista) { //ou if (no->ant == nullptr) {
        *inicioLista = no->prox;  //Reposicionar inícioLista
        (no->prox)->ant = nullptr;
        delete no;
        cout << "\nNó encontrado e removido da lista com sucesso, primeiro elemento!" << endl;
        return 1;
    }
    //remoção será no meio da lista, deve realocar os ponteiros
    if (no->prox != nullptr) {
        (no->ant)->prox = no->prox;
        (no->prox)->ant = no->ant;
    }
    else // O nó do fim da lista será removido
        (no->ant)->prox = nullptr;

    delete no;
    cout << "\nNó encontrado e removido da lista com sucesso!" << endl;
    return 1;
}

int consultarPosicao(Lista* inicioLista, int pos) {
    if (inicioLista == nullptr) {
        cout << "\nLista não criada!" << endl;
        return 0;
    }
    if (pos <= 0) {
        cout << "\nPosição informada inválida!" << endl;
        return 0;
    }
    if ((*inicioLista) == nullptr) { //lista vazia, não há o que consultar
        cout << "\nLista vazia!" << endl;
        return 0;
    }
    No *noAux = *inicioLista;

    int i = 1;
    while((noAux != nullptr) && (i < pos)) {
        noAux = noAux->prox;
        i++;
    }
    if (noAux == nullptr) {
        cout << "\nNão há elementos na posição solicitada!" << endl;
        return 0;
    }
    cout << "\nDados do aluno na posição "<< pos << endl;
    cout << "Nome: " << noAux->aluno.nome << endl;
    cout << "Matrícula: " << noAux->aluno.matricula << endl;
    cout << "Nota: " << noAux->aluno.nota << endl;
    return 1;
}

int consultarMatricula(Lista* inicioLista, int mat) {
    if (inicioLista == nullptr) {
        cout << "\nLista não criada!" << endl;
        return 0;
    }
    if ((*inicioLista) == nullptr) { //lista vazia, não há o que consultar
        cout << "\nLista vazia!" << endl;
        return 0;
    }
    No *noAux = *inicioLista;

    while((noAux != nullptr) && (noAux->aluno.matricula != mat)) {
       noAux = noAux->prox;
    }
    if (noAux == nullptr) {
        cout << "\nMatrícula não encontrada na lista!" << endl;
        return 0;
    }
    cout << "\nDados do aluno de matrícula: "<< mat << endl;
    cout << "Nome: " << noAux->aluno.nome << endl;
    cout << "Matrícula: " << noAux->aluno.matricula << endl;
    cout << "Nota: " << noAux->aluno.nota << endl;
    return 1;
}
