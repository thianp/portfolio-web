export default function Experience({
  startDate,
  endDate,
  title,
  org,
  details,
}) {
  return (
    <div>
      <p className="text-gray">
        {startDate} - {endDate}
      </p>
      <h3>
        {title}, {org}
      </h3>
      <p>{details}</p>
    </div>
  );
}
