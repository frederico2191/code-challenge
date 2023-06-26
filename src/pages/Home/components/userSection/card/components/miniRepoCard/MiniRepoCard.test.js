import { render, screen } from "@testing-library/react";
import MiniRepoCard from '.'
import MiniRepoProfile from '../../../../../../../mocks/MiniRepoProfile.json'

test("should display repo name, description and amount of stars", () => {
    render(<MiniRepoCard repo={MiniRepoProfile}/>)

    expect(screen.getByTestId("mini-repo-card")).toBeVisible()

    const repoName = screen.getByTestId("repo-name")
    const repoStars = screen.getByTestId("repo-stars");
    const repoDescription = screen.getByTestId("repo-description");

    expect(screen.getByTestId("repo-name")).toHaveTextContent('Joalor64-Engine-Rewrite');
    expect(repoStars).toHaveTextContent('15');
    expect(repoDescription).toHaveTextContent('Just Joalor64 Engine remade on Psych Engine 0.6.3. And no, the original IS NOT discontinued.');
    
    expect(repoName).toBeVisible()
})

test("should display fallback if repo not found or error", () => {
    render(<MiniRepoCard repo={{}}/>)

    expect(screen.getByTestId("mini-repo-card")).toBeVisible()

    const repoName = screen.getByTestId("repo-name")
    const repoStars = screen.getByTestId("repo-stars");
    const repoDescription = screen.getByTestId("repo-description");

    expect(screen.getByTestId("repo-name")).toHaveTextContent('No name added');
    expect(repoStars).toHaveTextContent('0');
    expect(repoDescription).toHaveTextContent('No description added');
    
    expect(repoName).toBeVisible()
})
