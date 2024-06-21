

import DropDownOptions from "../../../components/ui/DropDownToUse"
function DisplayInstitutes()
{

    const Btech =[
        "CSE",
        "IT",
        "ECE",
        "EEE",
        "MECH",
        "CIVIL",
        "ENTC",
        "CHEM",
        "BIO",
        "MAT",
        "PHY",
        "ARCH",
        "MCA",
        "MBA",
        "BCA",
        "BCOM",
        "MCOM",
    ]
    const Diploma = [
        "Fashion",
        "TT",
        "TC"
    ]
    const MBA = [
        "First year",
        "Second year",
    ]

    return (
        <>
        <div>

       
            <DropDownOptions title={"BTech"}options={Btech}/>
            <DropDownOptions title={"Diploma"} options={Diploma} />
            <DropDownOptions title={"MBA"} options={MBA} />
            </div>
        </>
    )
}

export default DisplayInstitutes;