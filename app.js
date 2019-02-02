
(function(){
    function Question(question, answers, correct){//jest to function constraktor
        this.question = question;// inaczej te pytanie równa sie pytanie które dodamy
        this.answers = answers;
        this.correct = correct;
    }
    //Zapisana metoda w opcji prototype 
    Question.prototype.displayQuestion = function() {
        console.log(this.question);//wyświetla pytanie
    
        for(var i = 0; i < this.answers.length; i++){// petla  która wyświetla nam odpowiedzi
            console.log(i + ': ' + this.answers[i]);
        }
    }
    //Metoda srawdzajaca nam poprawna odpowiedz
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if(ans === this.correct){// jeżeli odpowiedz uzytkownika jest taka sama jak correct odpowiedz to wyświetla nam Poprawna odpwoiedz
            console.log('Poprawna Odpowiedź!');
            sc = callback(true);
        }
        else{// a jeżeli odpowiedz jest zła to wyświetla nam ta odpowiedz
            console.log('Zła odpowiedź. Spróbuj ponownie: ');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
        console.log('Twój wynik to: ' + score);
        console.log('----------------------------');
    }
//Tu znajdują się wszystkie pytania  zapisane w zmiennej
    var q1 = new Question('Czy Java Script to najlepszy język na świecie?', 
        ['Tak', 'Nie'], //to są dane odpowiedzi
        0);// a to jest numer poprawnej odpowiedzi
    
    var q2 = new Question('Jak ma na imie osoba która tworzyła ten quiz na potrzeby zaliczenia z najlepszego przedmiotu?',
        ['Adam','Arek','Artur'],
        2);
    
    var q3 = new Question('Jak najlepjej opisałbyś programowanie?',
        ['Nudne','Ciężke','Zabawne','Przyjemne'],
        3);

    var q4 = new Question('Jakiej opcji używamy w Java Script by sie nie powtarzać',
        ['promt','function','var'],
        1);
    
    var q5 = new Question('Jakiej opcji używamy w JS żeby zapętlać kod',
        ['if','this','new','for'],
        3);
    //deklaracja zmiennej w któej znajduja sie wszystkie zmienne z pytaniami i odpowiedziami
    var questions = [q1, q2, q3, q4, q5];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
//zmienna trzymajaca nasz wynik
    var keepScore = score();
//funkcja dzięki której pytania beda losowo zadawane jedno po drugim i dopiero po wpisaniu exit w oknie zakonczy quiz
    function nextQuestion(){
    
        var n = Math.floor(Math.random() * questions.length)// funkcja floor usuwa liczby po przcinku, a funkcja random losuje nam dane pytanie z pośród 5 pytan
    
        questions[n].displayQuestion();
    
        var answer = prompt('Wybierz proszę poprawną odpowiedź.');// prompt to wyskakujacy komunikat z okienkiem w ktorym wpisujemy odpowiedzi
    
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    
    }

    nextQuestion();
})();


