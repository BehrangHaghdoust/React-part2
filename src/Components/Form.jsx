const Form = () => {

    const handleChange = (value) => {
        console.log(value);
    }

    const changeState = (e) => {
        console.log(e.target.value);

    }
    const changeState2 = (e) => {
        // console.log(e.target.selectedOptions);
        let selectedOptions = [...e.target.selectedOptions ].map(option => option.value);
        console.log(selectedOptions);

    }

    return (
        <div>
            <input onChange={(e) => handleChange(e.target.value)} type="text" />
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
            </select>

        </div>
    )

}

export default Form;