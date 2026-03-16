class QAItem{

    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }

    render(){
        const container = document.createElement("div");
        container.classList.add("qa-item");

        const q = document.createElement("div");
        q.classList.add("question");
        q.textContent = this.question + " +";

        const a = document.createElement("div");
        a.classList.add("answer");
        a.textContent = this.answer;

        q.addEventListener("click", () => {
            container.classList.toggle("active");

            if(container.classList.contains("active")){
                q.textContent = this.question + " -";
            }else{
                q.textContent = this.question + " +";
            }
        });

        container.appendChild(q);
        container.appendChild(a);

        return container;
    }
}

const qaList = [
    new QAItem("What is JavaScript?", "JavaScript is a programming language used to make web pages interactive."),
    new QAItem("What is HTML?", "HTML is used to create the structure of a webpage."),
    new QAItem("What is CSS?", "CSS is used to style and design webpages.")
];

const faqContainer = document.getElementById("faq-container");

qaList.forEach(item => {
    faqContainer.appendChild(item.render());
});