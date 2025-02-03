document.addEventListener("DOMContentLoaded", function () {
    const resultsData = {
        // JSS 1 RESULTS
        "12345": {
            name: "Adekunle James",
            class: "JSS 1",
            admission: "12345",
            session: "2024/2025",
            position: "5th",
            grade: "A",
            subjects: [
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "English", ca1: 18, ca2: 22, exam: 45, total: 85, grade: "B" },
                { name: "Pysics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Chemistry", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Biology", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Agric", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" }
            ],
            
            comments: {
                teacher: "Excellent performance",
                vp: "Keep up the good work",
                principal: "Outstanding result"
            }
        },

        "678900": {
            name: "James Adekunle",
            class: "JSS 1",
            admission: "12345",
            session: "2024/2025",
            position: "5th",
            grade: "A",
            subjects: [
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "English", ca1: 18, ca2: 22, exam: 45, total: 85, grade: "B" },
                { name: "Pysics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Chemistry", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Biology", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Agric", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" },
                { name: "Mathematics", ca1: 20, ca2: 25, exam: 50, total: 95, grade: "A" }
            ],
            
            comments: {
                teacher: "Excellent performance",
                vp: "Keep up the good work",
                principal: "Outstanding result"
            }
        },
    };

    document.getElementById("check-result").addEventListener("click", function () {
        let matric = document.getElementById("matric").value.trim();
        let term = document.getElementById("term").value;
        let resultOutput = document.getElementById("result-output");

        if (resultsData[matric]) {
            let studentData = resultsData[matric];

            document.getElementById("selected-term").textContent = term.toUpperCase();
            document.getElementById("student-name").textContent = studentData.name;
            document.getElementById("student-class").textContent = studentData.class;
            document.getElementById("student-admission").textContent = studentData.admission;
            document.getElementById("session").textContent = studentData.session;
            document.getElementById("position").textContent = studentData.position;
            document.getElementById("grade").textContent = studentData.grade;

            let subjectsList = document.getElementById("subjects-list");
            subjectsList.innerHTML = "";

            studentData.subjects.forEach(subject => {
                let row = `<tr>
                    <td>${subject.name}</td>
                    <td>${subject.ca1}</td>
                    <td>${subject.ca2}</td>
                    <td>${subject.exam}</td>
                    <td>${subject.total}</td>
                    <td>${subject.grade}</td>
                </tr>`;
                subjectsList.innerHTML += row;
            });

            document.getElementById("teacher-comment").textContent = studentData.comments.teacher;
            document.getElementById("vp-comment").textContent = studentData.comments.vp;
            document.getElementById("principal-comment").textContent = studentData.comments.principal;

            resultOutput.style.display = "block"; // Show result
        } else {
            alert("Matric number not found! Please enter a valid matric number.");
            resultOutput.style.display = "none";
        }
    });

    /*document.getElementById("print-result").addEventListener("click", function () {
        window.print();
    });

    document.getElementById("download-result").addEventListener("click", function () {
        alert("To download, press Ctrl + P and select 'Save as PDF'.");
    });*/


    document.getElementById("print-result").addEventListener("click", function () {
        window.print();
    });
    
    document.getElementById("download-result").addEventListener("click", function () {
        let resultContent = document.getElementById("result-output").innerHTML;
        
        let printableWindow = window.open("", "_blank");
        printableWindow.document.write(`
            <html>
                <head>
                    <title>Download Result</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                        th { background-color: #007bff; color: white; }
                    </style>
                </head>
                <body>
                    ${resultContent}
                </body>
            </html>
        `);
        printableWindow.document.close();
        printableWindow.print();
    });
});