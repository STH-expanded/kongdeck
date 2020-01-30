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
                list_id: '',
                tweets: [
                    'Now that\'s all sorted, I\'m going back to sleep.',
                    'What\'cha do that for?! I was having a nice nap.',
                    'My bananas and my buddy, Diddy, they are gone!',
                ],
            },
            {
                id: 'diddy_kong',
                name: 'Diddy Kong',
                attributes: ['strongness', 'cowardliness', 'happiness', 'normality'],
                list_id: '1219199556824465408',
                tweets: [
                    'You lazy ape, you are getting too old for this!',
                    'You\'re bluffing, lizard face.',
                    'I\'m outta here!',
                ],
            },
            {
                id: 'funky_kong',
                name: 'Funky Kong',
                attributes: ['strongness', 'bravery', 'happiness', 'quirkiness'],
                list_id: '1221506799527976960',
                tweets: [
                    'Whoa, dudes! My name\'s Funky Kong!',
                    'My bodacious jumbo barrel will take you anywhere',
                    'Yo Gorillas! Go see old man Cranky, he can help ya out!',
                ],
            },
            {
                id: 'chunky_kong',
                name: 'Chunky Kong',
                attributes: ['strongness', 'cowardliness', 'sadness', 'normality'],
                list_id: '',
                tweets: [
                    'PROZIS ALDE10',
                    'Someone h-help me! I\'m s-scared !',
                    'Chunky free now. Thank you friend Lanky.'
                ],
            },
            {
                id: 'cranky_kong',
                name: 'Cranky Kong',
                attributes: ['weakness', 'cowardliness', 'sadness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'Take a look inside your banana cave. You\'re in for a big surprise!',
                    'You big ape! I could hear you coming from miles away!',
                    'I\'ve got more gameplay in my little finger than this entire game does!',
                ],
            },
            {
                id: 'swanky_kong',
                name: 'Swanky Kong',
                attributes: ['weakness', 'cowardliness', 'happiness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'Hello my fanzouzes',
                    'Hello my little beauties',
                    'Hello the kheys',
                ],
            },
            {
                id: 'bluster_kong',
                name: 'Bluster Kong',
                attributes: ['strongness', 'cowardliness', 'sadness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'Wait a minute, not so fast! I want to go over that \'richer-poorer\' part again with my lawyer!',
                    'Don\'t bother, I\'m watching it for you.',
                    'I\'m just one sneaky, peeping, two-bit step away from becoming an even richer richest ape on Kongo Bongo Island- and that\'s rich.',
                ],
            },
            {
                id: 'wrinkly_kong',
                name: 'Wrinkly Kong',
                attributes: ['weakness', 'bravery', 'sadness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'I\'ll be here if you need me.',
                    'Match the pictures with DK in his cabin near Candy.',
                    'Get DK\'s coconut shooter from Funky\'s Store and use it to hit the people.',
                ],
            },
            {
                id: 'dixie_kong',
                name: 'Dixie Kong',
                attributes: ['weakness', 'bravery', 'happiness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'Man, I love chocolate!',
                    'Let\'d do it, Boomer!',
                    'No way, you crazy bear!',
                ],
            },
            {
                id: 'lanky_kong',
                name: 'Lanky Kong',
                attributes: ['weakness', 'cowardliness', 'sadness', 'normality'],
                list_id: '',
                tweets: [
                    'Come and find me in the Tag Barrel!',
                    'Yahoo! Come up here and get me, dummies!',
                    'Hopla !',
                ],
            },
            {
                id: 'candy_kong',
                name: 'Candy Kong',
                attributes: ['weakness', 'cowardliness', 'happiness', 'normality'],
                list_id: '',
                tweets: [
                    'How would you like a quick spin in my save barrel?',
                    'For just 3 coins, I`\'ll let you play with my instrument anytime you want.',
                    'Your instrument\'s lost some of its energy. Here, let me fix it for you.',
                ],
            },
            {
                id: 'kiddy_kong',
                name: 'Kiddy Kong',
                attributes: ['strongness', 'cowardliness', 'happiness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'WAAAAAAAAA',
                    'Ouh Ouh !',
                    'OOOh OOOOOOOOh !',
                ],
            },
            {
                id: 'tiny_kong',
                name: 'Tiny Kong',
                attributes: ['weakness', 'bravery', 'sadness', 'normality'],
                list_id: '',
                tweets: [
                    'Nice work, Diddy!',
                    'I\'m off to the Tag Barrel- Ready to kick some reptile butt!',
                    'My friends and I will look out for them on our adventure.',
                ],
            },
            {
                id: 'chained_kong',
                name: 'Chained Kong',
                attributes: ['strongness', 'bravery', 'sadness', 'normality'],
                list_id: '',
                tweets: [
                    'Wallah, I did nothing wrong !',
                    'Get me out of the zonzon please',
                    'Ouh Ouh !',
                ],
            },
            {
                id: 'eddie_yeti',
                name: 'Eddie The Mean Old Yeti',
                attributes: ['strongness', 'bravery', 'sadness', 'quirkiness'],
                list_id: '',
                tweets: [
                    'GRRRRRR',
                    'Me Like You !',
                    'Me Eddie, the Mean Old Yeti',
                ],
            },
            {
                id: 'baby_kong',
                name: 'Baby Kong',
                attributes: ['weakness', 'bravery', 'happiness', 'normality'],
                list_id: '',
                tweets: [
                    'Ouh Ouh !',
                    'Gou Gou !',
                    'BRRRRRRR !',
                ],
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
