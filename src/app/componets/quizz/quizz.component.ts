import { Component, OnInit } from '@angular/core';
import { questions, title, results } from '../../../assets/data/quizz.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  
  title:string = "Titulo"
  arrayData:any[] = []
  questionsSelected:any
  questionIndex:number = 0
  indexMax:number = 0

  respost:string[] = []
  resultFinaly:string = ""
  
  showResp:boolean = false
  
  
  ngOnInit(): void {
    if(questions){
      this.title = title
      this.arrayData = questions
      this.questionsSelected = this.arrayData[this.questionIndex]
      this.indexMax = this.arrayData.length
    }
  }
  
  player( value:string ){
    this.respost.push(value)
    this.questionIndex < this.indexMax && this.questionIndex++
    this.procesPlay();
  }

  procesPlay():void{
    if(this.questionIndex < this.indexMax){
      this.questionsSelected = this.arrayData[this.questionIndex]
    }else{
      let a :number = 0
      let b :number = 0
      this.respost.map((res)=>{ 
        res === "A" ? a++ : b++
      })
      a > b ? this.resultFinaly = results.A : this.resultFinaly = results.B;
      (this.resultFinaly != "") && (this.showResp = true)

      setTimeout(()=> {
        this.zerarGame()
      }, 5000)
    }
  }
  
  zerarGame():void{
    this.questionIndex = 0
    this.questionsSelected = this.arrayData[this.questionIndex]
    this.respost = []
    this.showResp = false;
  }

}


