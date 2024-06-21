

function DisplayYears({course ,dept})
{
    let options =[];
    if(course =="Btech")
        {
        options = ["First year", "Seoond year", "Third year", "Final year"]
        }
    else if (course ==="Diploma")
        {
        options = ["First year", "Seoond year", "Third year"]
    }
        
    return (
        <>
        <div>

       
           {options.map((item)=>(
            <option key={item} value={item}>
                {item}
            </option>
           ))}
            </div>
        </>
    )
}
export default DisplayYears;