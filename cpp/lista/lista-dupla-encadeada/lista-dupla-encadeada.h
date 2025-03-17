#ifndef LISTA-DUPLA-ENCADEADA_H_INCLUDED
#define LISTA-DUPLA-ENCADEADA_H_INCLUDED

struct ALUNO {
    int matricula;
    char nome[50];
    float nota;
};
typedef struct ALUNO Aluno;

struct NODE {
    Aluno aluno;
    struct NODE *prox, *ant; //criação de dois ponteiros anterior e próximo
};

typedef struct NODE *Lista;
typedef struct NODE No;

void cadastrarAluno(Aluno *alunoN);

Lista* criarLista();
void liberarLista(Lista* inicioLista);

int inserirFinal(Lista* inicioLista, Aluno *alunoN);
int inserirInicio(Lista* inicioLista, Aluno *alunoN);
int inserirItem(Lista* inicioLista, Aluno *alunoN);

void imprimirLista(Lista* inicioLista);
void imprimirListaInversa(Lista *inicioLista);

int removerItem(Lista* inicioLista, int mat);
int removerInicio(Lista* inicioLista);
int removerFinal(Lista* inicioLista);

int consultarMatricula(Lista* inicioLista, int mat);
int consultarPosicao(Lista* inicioLista, int pos);

#endif // LISTA-DUPLA-ENCADEADA_H_INCLUDED
