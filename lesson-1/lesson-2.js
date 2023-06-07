//! reactive haqida

const btn = document.querySelector(`.btn`)
const country = document.querySelector(".country")


let countryID = 0
btn.addEventListener("click", () =>{
    countryID += 1
    country.textContent = `Country ${countryID}`
})


//!  bu cod faqat dom orqali gina ishlaydi yani hozr countryga 1+ qilb beradi 
// ! agar textContent ni tashqariga chiqarib quyak u ishlamidi va 1+ qilb bermidi
//! veuJS esa bzga shuni qullab beradi yani tepadagiday holatda tashqarida bulganda ham ishlab berishi mumkin
// ! endi shu codeni veuJS  ishlashini qilmz

data(){
    return {
        country :0 //! buyer bzga 2 qismga bo'lindi
                    //? 1 model
                    //? new proxy 
        //todo bu new proxy bu bizga 2ta parameter beradi 
        //? 1# get va 2# set methodlarini beradi
    

    }
}

country += 1

//! bu cod tepadagi kodni veyjs hisoblanadi yani bu holat hozir bzda natogli lekin veujsda ishlaydi
// ! va bu vertual domda ham ishlaydi