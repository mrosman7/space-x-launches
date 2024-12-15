export interface ApiResponse {
    flight_number: number;
    date_utc: string;
    name: string;
    details: string;
    links: {
        presskit: string;
        webcast: string;
        wikipedia: string,
        reddit: {
            campaign: string,
            launch: string,
            media: string,
            recovery: string
        },
        patch: {
            small: string
        }
    }
}
