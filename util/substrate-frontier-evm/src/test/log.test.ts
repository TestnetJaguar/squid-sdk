import * as log from '../log'
import expect from 'expect'

describe('EvmLog', () => {
    it('V0', () => {
        expect(
            log.getAsV0({
                address: '0xbc6dcccf078a648520b2888892bbf33594e44cb7',
                data: '0x00000000000000000000000000000000000000000000003635c9adc5dea00000',
                topics: [
                    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                    '0x0000000000000000000000000000000000000000000000000000000000000000',
                    '0x0000000000000000000000002f1a92ac819ef4013a8ba6c0630c79d358b38023',
                ],
            })
        ).toEqual({
            address: '0xbc6dcccf078a648520b2888892bbf33594e44cb7',
            data: '0x00000000000000000000000000000000000000000000003635c9adc5dea00000',
            topics: [
                '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                '0x0000000000000000000000000000000000000000000000000000000000000000',
                '0x0000000000000000000000002f1a92ac819ef4013a8ba6c0630c79d358b38023',
            ],
        })
    })

    it('V1', () => {
        expect(
            log.getAsV1({
                log: {
                    address: '0x0b7a0eaa884849c6af7a129e899536dddca4905e',
                    data: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000171b479d8ccd9da9f4bdbb6ac35cbec5bf5e557',
                    topics: [
                        '0xa1b6a046664a0ecf068059f26de56878f8d0e799907ca2e42d9148ccbdc717a7',
                        '0x0000000000000000000000000000000000000000000000000000000000000001',
                        '0x000000000000000000000000d0670aee3698f66e2d4daf071eb9c690d978bfa8',
                        '0x0000000000000000000000002107dc09fd3c7127749c1a47c84e4a33d6e72f1a',
                    ],
                },
            })
        ).toEqual({
            address: '0x0b7a0eaa884849c6af7a129e899536dddca4905e',
            data: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000171b479d8ccd9da9f4bdbb6ac35cbec5bf5e557',
            topics: [
                '0xa1b6a046664a0ecf068059f26de56878f8d0e799907ca2e42d9148ccbdc717a7',
                '0x0000000000000000000000000000000000000000000000000000000000000001',
                '0x000000000000000000000000d0670aee3698f66e2d4daf071eb9c690d978bfa8',
                '0x0000000000000000000000002107dc09fd3c7127749c1a47c84e4a33d6e72f1a',
            ],
        })
    })
})