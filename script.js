(function(){
    function Question(question,answer,correct){
        this.question=question;
        this.answer=answer;
        this.correct=correct;

    }
    

    Question.prototype.displayQuestion=function(){
        console.log(this.question);
        
        for (var i=0;i<this.answer.length;i++){
            console.log(i+" : "+this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer=function(ans){
        console.log(ans);
       
        
        if(ans===this.correct){
            nilaiTotal +=1;
            console.log('jawab benar');
        }else{
            nilaiSalahJwb += 1;
            console.log('salah, coba lagi');
            
        }
    }
    
    
    var q1= new Question('apakah javascript bhasa paling keren sdunia?', ['ya','gk'],'0');
    var q2= new Question('siapa dosen yang mengajar kuliah ini?',['john','misel','oskar'],'2');
    var q3= new Question('kata yang paling bagus mendeskripsikan koding?',['bosen','susah','bahagiakan','bosaknkan'],'2');
    
     var q4= new Question('Siapa dosen pengampu makul IMAKOM?',['Suyudi','Bu Chan','oskar'],'1');
     var q5= new Question('Stikom Keren nggak?',['Ga','B aja sih','Keren beeettt'],'2');
     var q6= new Question('Stikom berapa lantainya?',['4','3','8'],'2');
     var q7= new Question('Tahun Target visi misi Stikom?',['2020','2025','2030'],'1');
     var q8= new Question('Kenapa Kim Woobin ganteng?',['Takdir','Dari lahir','Ganteng aza ya kaaan'],'1');
     var q9= new Question('Kenapa mahasiswa suka tidur dikelas?',['Ngantuk cyin','Gatau','Yambuhya'],'2');
     var q10= new Question('Kenapa rata-rata cewek suka drakor?', ['Kepo lu', 'Baperin','Oppa nya ganteng'],'2')
    
    
    
    var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    
    var nilaiTotal=0;
    var nilaiSalahJwb=0;
    var jmlPertanyaan=0;
    
    stop:
    {
        for(;;){
            
            
var n=Math.floor(Math.random()*questions.length);
            
questions[n].displayQuestion();
var answer=prompt('Jawab yang bener ya gais, ketik exit untuk mengakiri game !');
    if(answer=='exit')
        {
            console.log('');
            console.log('       Quite game !       ');
            console.log('Jumlah soal yang terjawab  ' +jmlPertanyaan);
            console.log('Jumlah soal salah Jawab '+nilaiSalahJwb);
            console.log('Total Nilai '+nilaiTotal);
            
            break stop;
            
            
        }
jmlPertanyaan +=1;
questions[n].checkAnswer(answer); 
            
            
        }
    }
    
})();