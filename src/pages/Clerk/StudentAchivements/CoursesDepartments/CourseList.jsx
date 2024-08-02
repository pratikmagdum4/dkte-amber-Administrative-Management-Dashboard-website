
import ListingComponent from "../../../../components/ui/listingPage";
const CourseList = ()=>{

    const buttonNames = [
        "Btech Engineering",
        "Btech Textile",
        "Diploma",
        "MBA"
    ]

    return (
        <>
        <div>
                <  ListingComponent buttonNames={buttonNames}  />
        </div>
        </>
    )
}

export default CourseList;
