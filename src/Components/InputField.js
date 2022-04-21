

export const InputField = ({ text, type, placeholder, value }) => {
    return (
        <div className="input-field">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
            />
            <label>{text}</label>
        </div>
    )
}