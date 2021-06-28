import { flow, makeAutoObservable } from "mobx";
import { AnyRover, Photo } from "./types";

type Sol = {
    solNumber: number,
    photosId: number[],
    rover: AnyRover
};

export class Mars {
    photos: Array<Photo> = [];
    favorites: Array<number> = [];
    sols: Array<Sol> = [];
    constructor() {
        makeAutoObservable(this, {
            fetchSol: flow.bound
        })
    }
    private setPhotos(photos: Array<Photo>): void {
        this.photos.push(...photos)
    }
    addToFavorites(photosId: number): void {
        this.favorites.push(photosId)
    }
    removeFromFavorites(favoriteId: number): void {
        const favoritePos = this.favorites.indexOf(favoriteId);
        this.favorites.splice(favoritePos, 1)
    }
    private hasSol(solNumber: number, rover: AnyRover): boolean {
        return this.sols.some(solItem => solItem.solNumber === solNumber && solItem.rover === rover)
    }
    private addSol(photos: Photo[], solNumber: number, rover: AnyRover): void {
        const photosId: number[] = photos.map(p => p.id)
        const sol = { solNumber, photosId, rover }
        this.sols.push(sol)
    }
    *fetchSol(solNumber: number, rover: AnyRover) {
        if (!this.hasSol(solNumber, rover)) {
            const solRes: Response
                = yield fetch(
                    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${solNumber}&api_key=${process.env.REACT_APP_NASA_KEY}`)
            if (solRes.status !== 200) {
                throw new Error("getSol request error")
            }
            const { photos } = yield solRes.json();
            this.setPhotos(photos)
            this.addSol(photos, solNumber, rover)
        }
    }
    getSolPhoto(solNumber: number, rover: AnyRover): Photo[] {
        const galleryPhotos: Photo[] = [];
        const sol = this.sols.find(sol => sol.solNumber === solNumber && sol.rover === rover)
        if (sol) {
            sol.photosId.forEach(id => {
                const photo = this.photos.find(p => p.id === id)
                photo && galleryPhotos.push(photo)
            })
        }
        return galleryPhotos;
    }
    getFavoritesPhoto(): Photo[] {
        const favorPhotos: Photo[] = [];
        this.favorites.forEach((id) => {
            const photo = this.photos.find((p) => p.id === id);
            photo && favorPhotos.push(photo);
        })
        return favorPhotos;
    }
}
