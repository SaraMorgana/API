import express from "express";

const app = express();

app.use(express.json());

app.post('/bmi', function (req, res) {
    const { height, weight } = req.body;

    console.log('height', height);

    function bmiStatus(weight, heigth) {
        const bmi = weight / heigth ** 2;

        if (bmi < 18.5) {
            return "Abaixo do Peso";
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Peso normal";
        } else if (bmi >= 25 && bmi < 30) {
            return "Sobre peso";
        } else {
            return "Obesidade";
        }
    }

    const bmi = bmiStatus(weight, height);

    const result = {
        height,
        weight,
        bmi
    };

    res.json(result);

    console.log(result);    
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
