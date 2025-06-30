import Card from "../components/Card"
function Probes(){
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center p-6 bg-amber-200">
        <Card  profilePic="https://media.licdn.com/dms/image/v2/D5603AQHWwwSR7yEjtA/profile-displayphoto-shrink_100_100/B56ZZh07LFHsAg-/0/1745397987636?e=1756944000&v=beta&t=jTdrY_oqaeGddm863NnVAxGkGquPt_WOHieOPx6j2YE" name="Abhishek Jaiswal" profession="SDE" age={22} bio="A passionate developer who loves solving problems and building applications with React and Node.js"/>
       </div>
    )
}

export default Probes