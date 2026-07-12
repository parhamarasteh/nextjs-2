"use client"

export default function SignUpForm() {
    function handleSubmit(e) {
        console.log('sign-up')
    }

    return <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
                <label>email</label>
                <input type="email" placeholder="enter your email" required/>
            </div>
            <div className="flex gap-4">
                <label>password</label>
                <input type="password" placeholder="enter your password" required/>
            </div>
            <button type="submit">sign up</button>
    </form>
}