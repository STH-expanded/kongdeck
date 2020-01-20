import { Injectable } from '@nestjs/common';
import { Results } from '../models/results';

export type Kong = any;

@Injectable()
export class KongService {

    private readonly kongs: Kong[];

    constructor() {
        this.kongs = [
            {
                id: 'donkey_kong',
                name: 'Donkey Kong',
                attributes: ['strongness', 'bravery', 'happiness', 'normality'],
                tweets: [],
            },
            {
                id: 'diddy_kong',
                name: 'Diddy Kong',
                attributes: ['weakness', 'cowardliness', 'happiness', 'quirkiness'],
                list_id: '1219199556824465408',
                tweets: [],
            },
            {
                id: 'funky_kong',
                name: 'Funky Kong',
                attributes: ['strongness', 'bravery', 'happiness', 'quirkiness'],
                tweets: [],
            },
            {
                id: 'chunky_kong',
                name: 'Chunky Kong',
                attributes: ['strongness', 'cowardliness', 'sadness', 'normality'],
                tweets: [],
            },
        ];
    }

    async assignKong(quizzResults: object): Promise<Kong> {
        const results = new Object(quizzResults);
        const userAttributes = [];
        let userKong: Kong;


        if (!results['strongness']) { results['strongness'] = 0; }
        if (!results['weakness']) { results['weakness'] = 0; }
        if (!results['bravery']) { results['bravery'] = 0; }
        if (!results['cowardliness']) { results['cowardliness'] = 0; }
        if (!results['happiness']) { results['happiness'] = 0; }
        if (!results['sadness']) { results['sadness'] = 0; }
        if (!results['quirkiness']) { results['quirkiness'] = 0; }
        if (!results['normality']) { results['normality'] = 0; }

        // Assign attributes to user
        results['strongness'] >= results['weakness'] ? userAttributes.push('strongness') : userAttributes.push('strongness');
        results['bravery'] >= results['cowardliness'] ? userAttributes.push('bravery') : userAttributes.push('cowardliness');
        results['happiness'] >= results['sadness'] ? userAttributes.push('happiness') : userAttributes.push('sadness');
        results['quirkiness'] >= results['normality'] ? userAttributes.push('quirkiness') : userAttributes.push('normality');

        // Sort userAttributes to compare to kong attributes
        userAttributes.sort();

        // For each kong, test if attributes match the user attributes
        this.kongs.forEach(kong => {
            kong.attributes.sort();
            if (userAttributes.toString() === kong.attributes.toString()) {
                userKong = kong;
            }
        });
        return userKong;
    }

    async findOne(name: string): Promise<Kong | undefined> {
        return this.kongs.find(kong => kong.name === name);
    }
}
