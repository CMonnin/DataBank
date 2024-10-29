import { Button } from '@douglasneuroinformatics/libui/components';
import { Card } from '@douglasneuroinformatics/libui/components';
import { useTranslation } from '@douglasneuroinformatics/libui/hooks';
import { useNavigate } from 'react-router-dom';

export type ProjectDatasetCardProps = {
  createdAt: Date;
  datasetId: string;
  description: null | string;
  isManager: boolean;
  license: string;
  name: string;
  projectId: string;
  updatedAt: Date;
};

const ProjectDatasetCard = ({
  createdAt,
  datasetId,
  description,
  isManager,
  license,
  name,
  projectId,
  updatedAt
}: ProjectDatasetCardProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  return (
    <>
      <Card className="my-3">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <ul>
            <li key={datasetId}>Dataset datasetId: {datasetId}</li>
            <li key={datasetId + 'createdAt'}>Created at: {createdAt.toString()}</li>
            <li key={datasetId + 'updatedAt'}>Updated at: {updatedAt.toString()}</li>
            <li key={datasetId + license}>Licence: {license}</li>
          </ul>
        </Card.Content>
        <Card.Footer className="flex justify-between">
          {isManager ? (
            <Button variant={'primary'} onClick={() => navigate(`/portal/project/dataset/${projectId}/${datasetId}`)}>
              {t('manageProjectDataset')}
            </Button>
          ) : (
            <Button variant={'primary'} onClick={() => navigate(`/portal/project/dataset/${projectId}/${datasetId}`)}>
              {t('viewProjectDataset')}
            </Button>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProjectDatasetCard;