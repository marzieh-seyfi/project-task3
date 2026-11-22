

export const search = ({ type, placeholder}) => {
    return (
        `
            <div class="custom-input">
                <input type=${type} placeholder=${placeholder} />
            </div>
        `
    )
}