import { FC } from 'react'

/**
 * The site wide backdrop: a faint technical grid that drifts diagonally, lit from
 * behind by a slow breathing halo.
 *
 * One fixed layer for the whole site rather than one per page, so the cost stays
 * constant however long a page grows. Everything is CSS: the drift and the halo are
 * pure `transform` and `opacity`, which the compositor handles without repainting,
 * and a reader who asked for reduced motion keeps the texture without the movement.
 * See `.background-grid-*` in `src/styles/style.css`.
 */
export const BackgroundGrid: FC = () => (
   <div aria-hidden='true' data-testid='background-grid' className='background-grid'>
      <div className='background-grid-lines' />
      <div className='background-grid-glow' />
   </div>
)
