import { annotationExampleRows } from '../data/siteData';

const columns = [
  { key: 'sn', label: 'SN', variant: 'sn' },
  { key: 'start', label: 'Start', variant: 'time' },
  { key: 'end', label: 'End', variant: 'time' },
  { key: 'description', label: 'Description', variant: 'description' },
];

export default function AnnotationExampleTable({
  rows = annotationExampleRows,
  variant = 'example',
  ariaLabel = 'Annotation example data',
}) {
  return (
    <div
      className={`annotation-example-table annotation-example-table--${variant}`}
      role="table"
      aria-label={ariaLabel}
    >
      <div className="annotation-example-table__panel">
        <div className="annotation-example-table__header" role="row">
          {columns.map((column) => (
            <div
              key={column.key}
              className={`annotation-example-table__cell annotation-example-table__cell--${column.variant} annotation-example-table__cell--header`}
              role="columnheader"
            >
              <span className="annotation-example-pill annotation-example-pill--header">
                {column.label}
              </span>
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.sn} className="annotation-example-table__row" role="row">
            <div
              className="annotation-example-table__cell annotation-example-table__cell--sn"
              role="cell"
            >
              <span className="annotation-example-pill annotation-example-pill--sn">{row.sn}</span>
            </div>
            <div
              className="annotation-example-table__cell annotation-example-table__cell--time"
              role="cell"
            >
              <span className="annotation-example-pill annotation-example-pill--time">{row.start}</span>
            </div>
            <div
              className="annotation-example-table__cell annotation-example-table__cell--time"
              role="cell"
            >
              <span className="annotation-example-pill annotation-example-pill--time">{row.end}</span>
            </div>
            <div
              className="annotation-example-table__cell annotation-example-table__cell--description"
              role="cell"
            >
              <span className="annotation-example-pill annotation-example-pill--description">
                {row.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
