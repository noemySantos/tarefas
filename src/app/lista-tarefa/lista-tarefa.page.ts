import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage{

  title = "Lista de tarefas";
  tarefas = [
    {
      "descricao": "Fazer cafe da manha",
      "horario": "10:00"
    },

    {
      "descricao": "Comer",
      "horario": "10:30"
    },

    {
      "descricao": "Prova de willian",
      "horario": "21:00"
    },

    {
      "descricao": "estudar",
      "horario": "15:30"
    },

    {
      "descricao": "dormir",
      "horario": "23:30"
    },

  ];

  nova_tarefa = this.criar_nova_tarefa();

  //# Declara uma instancia no construtor
  constructor(public toastController: ToastController, public alertController: AlertController) { }

  async add() {
    this.tarefas.push(this.nova_tarefa);
    this.nova_tarefa = this.criar_nova_tarefa();

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Nova tarefa cadastrada com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_tarefa() {
    return {
      "descricao": "",
      "horario": ""
    }
  }

  async excluir(tarefa) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir a tarefa?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            this.nova_tarefa = tarefa;
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            //# Cria o toast
            const toast = await this.toastController.create({
              message: 'Tarefa excluida com sucesso!',
              duration: 5000,
              position: 'top'
            });

            //# Exibir a mensagem na tela
            toast.present();

          }

        }
      ]
    });

    await alert.present();
  }

  editar(tarefa) {
    // Atuliaza o formulario com os dados da terefa
    this.nova_tarefa = tarefa;

    // Remove o item selecionado na lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
}

}
