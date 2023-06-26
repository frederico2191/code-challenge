import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Card from '.'
import userProfile from '../../../../../mocks/UserProfile.json'

const checkInsideCard = () => {
    const followersNumber = screen.getByTestId("followers-number");
    const username = screen.getByTestId("username");
    const avatarImage = screen.getByAltText("avatar-image");
    const name = screen.getByTestId("name");
    
    expect(followersNumber.textContent).toBe('760Followers')
    expect(username.textContent).toBe('lovelysweet1017')
    expect(avatarImage.src).toBe('https://avatars.githubusercontent.com/u/135192205?v=4')
    expect(name.textContent).toBe('Sweet')
}

const hoverCard = async () => {
    const cardComponent = screen.getByTestId("card");
    await fireEvent.mouseEnter(cardComponent)
}

afterEach(cleanup)

test("should display username, name, number of followers, cover image and avatar image", () => {
    render(<Card user={userProfile}/>)
    checkInsideCard()
})

test("should render MiniRepoCard component", () => {
    render(<Card user={userProfile}/>)
    expect(screen.getByTestId('mini-repo-card')).toBeInTheDocument();
})

test("should not render on error", () => {
    render(<Card user={userProfile} error={true}/>)
    expect(screen.queryByTestId("card")).not.toBeInTheDocument()
})

test("on hover, should display username, name and number of followers", async () => {
    render(<Card user={userProfile}/>)
    await hoverCard()
    checkInsideCard()
})

test("on hover, should display a button that opens GH profile in new tab", async () => {
    render(<Card user={userProfile}/>)
    await hoverCard()
    expect(screen.getByTestId('profile-link')).toHaveAttribute('href', 'https://github.com/lovelysweet1017');
})

test("on hover, should not display MiniRepo component", async () => {
    render(<Card user={userProfile}/>)
    await hoverCard()
    expect(screen.queryByTestId('mini-repo-card')).not.toBeInTheDocument();
})

test("on hover leave, should display normal card again", async () => {
    render(<Card user={userProfile}/>)

    const cardComponent = screen.getByTestId("card");
    await fireEvent.mouseEnter(cardComponent)

    checkInsideCard()
    expect(screen.queryByTestId('mini-repo-card')).not.toBeInTheDocument();

    await fireEvent.mouseLeave(cardComponent)

    expect(screen.queryByTestId('mini-repo-card')).toBeVisible()
    expect(screen.queryByTestId('profile-link')).not.toBeInTheDocument()
})