const Form = () => {

    // const handleChange = (value) => {
    //     console.log(value);
    // }

    // const changeState = (e) => {
    //     console.log(e.target.value);

    // }
    // const changeState2 = (e) => {
    //     // console.log(e.target.selectedOptions);
    //     let selectedOptions = [...e.target.selectedOptions ].map(option => option.value);
    //     console.log(selectedOptions);
    // }

    let checkItems = [];

    const changeBox = (e) => {


        let item = checkItems.find(item => item === e.target.value);

        if (item) {
            checkItems = checkItems.filter(item => item !== e.target.value)
        } else {
            checkItems.push(e.target.value)
        }

        console.log(checkItems);
    }

    const radioChangeBox=(e)=>{
        console.log(e.target.value);
    }

    return (
        <div>
            {/* <input onChange={(e) => handleChange(e.target.value)} type="text" />
            <br />
            <textarea onChange={(e) => handleChange(e.target.value)} style={{ marginTop: '20px' }}></textarea>
            <br />

            <select name="" id="" onChange={(e) => changeState(e)}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JAVASCRIPT">HTML</option>
                <option value="PHP">PHP</option>
            </select>
            <br />
            <hr />

            <select multiple name="" id="" onChange={(e) => changeState2(e)}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JAVASCRIPT">HTML</option>
                <option value="PHP">PHP</option>
            </select> */}
            <input type="checkbox" onChange={(e) => changeBox(e)} value="check1" />check1
            <br />
            <input type="checkbox" onChange={(e) => changeBox(e)} value="check2" />check2
            <br />
            <input type="checkbox" onChange={(e) => changeBox(e)} value="check3" />check3
            <br />

            <input type="radio" name="gender" onChange={(e) => radioChangeBox(e)} value="Male" />Male
            <br />
            <input type="radio" name="gender" onChange={(e) => radioChangeBox(e)} value="Female" />Female
            <br />

        </div>
    )

}

export default Form;