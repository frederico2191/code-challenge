import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Card from '.'
import userProfile from '../../../../../mocks/UserProfile.json'
import MiniRepoCard from '../../../../../mocks/MiniRepoProfile.json'

const checkInsideCard = () => {
    // const cardComponent = screen.getByTestId("card");
    const followersNumber = screen.getByTestId("followers-number");
    const username = screen.getByTestId("username");
    const avatarImage = screen.getByAltText("avatar-image");
    const name = screen.getByTestId("name");
    
    expect(followersNumber.textContent).toBe('760Followers')
    expect(username.textContent).toBe('lovelysweet1017')
    expect(avatarImage.src).toBe('https://avatars.githubusercontent.com/u/135192205?v=4')
    expect(name.textContent).toBe('Sweet')
}

const checkInsideMiniRepoCard = () => {
    // const repoName = screen.findByTestId("repo-name",!undefined,id:)
    // const repoName = screen.queryByTestId("repo-name");
    const repoName = screen.getByTestId("repo-name");
    // const repoStars = screen.queryByTestId("repo-stars");
    // const repoDescription = screen.queryByTestId("repo-description");

    // expect(screen.getByTestId("repo-name")).toHaveTextContent('iCinema');
    // expect(screen.getByTestId("repo-stars")).toHaveTextContent('3');
    // expect(screen.getByTestId("repo-description")).toHaveTextContent('It is a most wonderful project in React');
    
    expect(repoName).toBeVisible()
    // expect(repoStars.textContent).toBe('3')
    // expect(repoDescription.textContent).toBe('It is a most wonderful project in React')

}

describe("Card", () => {
    
    render(<Card user={userProfile}/>)
    afterEach(cleanup)

    // it("should display username, id, number of followers, cover image and avatar image", () => {
    //     checkInsideCard()
    // })
    // it("should display MiniRepo component", () => {
    //     checkInsideMiniRepoCard()
    // })

    it("should not render if receives error", () => {

    })

    describe("on hover", () => {
        beforeEach(async () => {
            const cardComponent = screen.getByTestId("card");
            await fireEvent.mouseEnter(cardComponent)
        })
        afterEach(cleanup)

        it("on hover, should display username, id and number of followers", () => {
            checkInsideCard()
        })

        it("on hover, should display a button that opens GH profile in new tab", () => {
            
        })

        it("on hover, should not display MiniRepo component", () => {
            expect(screen.queryByTestId('mini-repo-card')).not.toBeInTheDocument();
        })
    })

})