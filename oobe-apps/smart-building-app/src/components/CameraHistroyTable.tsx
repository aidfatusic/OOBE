import { Table } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { CameraHistoryData } from "types";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  data: CameraHistoryData[];
};

const HistoryCameraTable = ({ data }: Props) => {
  const intl = useIntl();

  return (
    <Table className="border-top mt-4">
      <thead>
        <tr>
          <th></th>
          <th>
            <FormattedMessage
              id="cameraHistoryTable.event"
              defaultMessage="Event"
            />
          </th>
          <th>
            <FormattedMessage
              id="cameraHistoryTable.number"
              defaultMessage="Number"
            />
          </th>
          <th>
            <FormattedMessage
              id="cameraHistoryTable.time"
              defaultMessage="Time"
            />
          </th>
          <th>
            <FormattedMessage
              id="cameraHistoryTable.date"
              defaultMessage="Date"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="text-center align-middle">
              {row.event === "Incident" && (
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  style={{
                    color: "var(--bs-warning)",
                    width: "1em",
                    height: "1em",
                  }}
                />
              )}
            </td>
            <td>{row.event}</td>
            <td>{row.numberOfPeople}</td>
            <td>
              {row.datetime &&
                intl.formatTime(row.datetime, {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
            </td>
            <td>
              {row.datetime &&
                intl.formatDate(row.datetime, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HistoryCameraTable;
